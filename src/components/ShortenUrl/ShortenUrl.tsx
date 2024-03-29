import {useState} from "react";
import axios from "axios";
import {BsStars} from "react-icons/bs";
import {FaArrowDown, FaChevronRight} from "react-icons/fa6";

export function ShortenUrl() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const domain = "roselinemo.com";

  const urlRegex = /^(http|https):\/\/[\w.-]+(:\d+)?(\/[\w.-]*)*\.[\w]+$/;

  const validateUrlAndShowError = (url: string) => {
    const isValid = urlRegex.test(url);
    setIsValidUrl(isValid);
    setErrorMessage(
      isValid
        ? ""
        : "Please enter a valid URL (format: http OR https://example.com)"
    );
  };

  async function handleShorten(longUrl: string) {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${longUrl}`
      );

      if (response.status !== 200) {
        throw new Error(`Error: ${response.status}`);
      }

      const shortenedUrl = response.data;
      if (!shortenedUrl) {
        throw new Error("Shortened URL not found in response");
      }

      setShortUrl(shortenedUrl);
      console.log(response.data);
    } catch (error) {
      setError("Failed to shorten url");
      console.error("Error shortening URL:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="shorten mb-6">
        <p className="text-gray-400 mb-5 flex gap-1">
          Try it now <FaArrowDown className="self-center mt-2 animate-bounce" />
        </p>
        <form className="paste-url flex justify-start gap-0 mb-4 w-96 relative">
          <input
            type="text"
            value={longUrl}
            id="long-url"
            onChange={(e) => {
              const newLongUrl = e.target.value;
              setLongUrl(newLongUrl);
              validateUrlAndShowError(newLongUrl);
            }}
            placeholder="Paste a long url here"
            required
            className="w-96 h-12 pl-3 pr-2 border border-gray-300 rounded-lg caret-green-800  focus:outline-green-800"
          />
          <button
            type="button"
            onClick={() => handleShorten(longUrl)}
            className="absolute shorten w-32 h-12 text-sm text-white uppercase font-medi hover:bg-green-950  active:shadow-lg active:bg-green-900 bg-green-900 flex pl-4 pr-2 pt-4 gap-1"
          >
            Shorten it <FaChevronRight className="self-center mb-3" />
          </button>
          {isLoading && (
            <span className="animate-spin">
              <svg
                className="w-10 h-8 z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="white" />
              </svg>
            </span>
          )}
        </form>

        {longUrl && !isValidUrl && (
          <p className="text-red-600 mb-2">{errorMessage}</p>
        )}
      </div>

      {shortUrl ? (
        <div className="result w-96 mb-8 mt-2 border border-gray-400 rounded-lg grid grid-cols-1 p-6 h-32 text-sm text-gray-900">
          <p>Here's Your Short URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel=""
            className="text-gray-800 text-md font-medi"
          >
            {shortUrl}
          </a>
        </div>
      ) : (
        <div className="flex gap-2 mb-8 mt-2">
          <p className="text-red-600 flex gap-2">
            {error}
            <button
              onClick={() => {
                setError("");
                setLongUrl("");
              }}
              aria-label="Close error message"
              className={`border border-gray-400 rounded-xs w-8 p-1 uppercase text-gray-600 text-xs ${
                error ? "visible" : "hidden"
              }`}
            >
              x
            </button>
          </p>
        </div>
      )}

      <div className="optional mb-12">
        <p className="text-gray-400 text-sm mb-5 flex gap-1">
          <BsStars className="self-center" /> Optional: Customize url text
        </p>
        <div className="flex justify-start gap-0 mb-2 w-96 relative">
          <select
            id="domain"
            value={""}
            onChange={() => {}}
            className="domain w-40 h-12 pl-3 pb-1 border border-gray-300 lowercase font-light focus:outline-gray-600 text-gray-400"
          >
            <option value={domain}>{domain}/</option>
            <option value="Use your domain" disabled>
              Use your domain
            </option>
          </select>
          <input
            type="text"
            id="custom-url"
            value={customAlias}
            disabled
            onChange={(e) => setCustomAlias(e.target.value)}
            placeholder="Enter custom text"
            className="custom-text absolute w-56 h-12 pl-3 pb-1 border border-gray-300 caret-green-800 focus:outline-green-800 "
          />
        </div>
      </div>
    </div>
  );
}
