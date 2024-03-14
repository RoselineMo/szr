import {useState} from "react";
import {BsStars} from "react-icons/bs";
import {FaArrowDown, FaChevronRight} from "react-icons/fa6";

export function ShortenUrl() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("p1.rs/");
  const [customUrl, setCustomUrl] = useState("");

  const urlRegex = /^(https):\/\/\w+\.\w+(:\d+)?(\/[\w\.]*)*$/;

  const validateUrl = (url: string) => {
    return urlRegex.test(url);
  };

  const handleShorten = async () => {
    if (!validateUrl(longUrl)) {
      setIsValidUrl(false);
      setErrorMessage("Please enter a valid URL");
      return;
    }

    try {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "dftuzljsBFK5CBjMBHJIXsRESFzJWyPK");

      var raw = JSON.stringify({
        long_url: longUrl,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(
        "https://api.apilayer.com/short_url/hash",
        requestOptions
      );
      const data = await response.json();

      if (data.short_url) {
        setShortUrl(data.short_url);
        console.log(response.text());
      } else {
        setError("Failed to shorten URL");
      }
    } catch (error) {
      setError("Failed to shorten URL");
    }
  };

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
              setIsValidUrl(true);
              setErrorMessage(" ");
            }}
            placeholder="Paste a long url here"
            required
            className="w-96 h-12 pl-3 pr-2 border border-gray-300 rounded-lg caret-green-800  focus:outline-green-800"
          />
          <button
            type="button"
            onClick={handleShorten}
            className="absolute shorten w-32 h-12 text-sm text-white uppercase font-medi hover:bg-green-950  active:shadow-lg active:bg-green-900 bg-green-900 flex pl-4 pr-2 pt-4 gap-1"
          >
            Shorten it <FaChevronRight className="self-center mb-3" />
          </button>
        </form>
        {!isValidUrl && <p className="text-red-600 mb-2">{errorMessage}</p>}
      </div>

      <div className="mb-12">
        <p className="text-gray-400 text-sm mb-5 flex gap-1">
          <BsStars className="self-center" /> Optional: Customize url text
        </p>
        <div className="flex justify-start gap-0 mb-2 w-96 relative">
          <select
            id="domain"
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="domain w-40 h-12 pl-3 pb-1 border border-gray-300 lowercase font-light focus:outline-gray-600 text-gray-400"
          >
            <option value="p1.rs/">p1.rs/</option>
            <option value="Use your domain">Use your domain</option>
          </select>
          <input
            type="text"
            id="custom-url"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="Type your custom text"
            className="custom-text absolute w-56 h-12 text-gray-200 pl-3 pb-1 border border-gray-300 caret-green-800 focus:outline-green-800 "
          />
        </div>
      </div>
      {shortUrl ? (
        <div className="result mb-4 border-gray-400 rounded-lg p-6 text-gray-900">
          <p>Here's Your Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      ) : (
        <p className="text-red-600 mb-4">{error}</p>
      )}
    </div>
  );
}
