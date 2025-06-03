import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [url, setUrl] = useState("");
  const [downloadLinks, setDownloadLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.includes("youtube.com")) {
      setDownloadLinks([
        { quality: "720p", format: "MP4", link: "#" },
        { quality: "360p", format: "MP4", link: "#" },
        { quality: "Audio", format: "MP3", link: "#" },
      ]);
    } else {
      alert("Please enter a valid YouTube URL");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Image src="/shahmy-logo.png" alt="Logo" width={40} height={40} />
        <h1>Shahmy</h1>
      </header>
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube URL here"
          style={{ width: '100%', padding: 10 }}
        />
        <button type="submit" style={{ marginTop: 10 }}>Download</button>
      </form>
      <div style={{ marginTop: 20 }}>
        {downloadLinks.map((item, index) => (
          <div key={index}>
            <a href={item.link}>{item.quality} - {item.format}</a>
          </div>
        ))}
      </div>
    </div>
  );
}