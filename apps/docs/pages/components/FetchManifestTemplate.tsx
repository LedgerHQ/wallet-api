import React, {useEffect, useState} from 'react'

const FetchManifestTemplate = () => {
    const [manifest, setManifest] = useState(null);
  
    useEffect(() => {
      const fetchManifest = () => {
        fetch("https://raw.githubusercontent.com/LedgerHQ/manifest-api/main/manifests/1inch-lld/manifest.json?token=GHSAT0AAAAAAB2DC3ZH5IKAFPIMFEIU27XSZEBZUYA")
          .then((result) => result.json())
          .then((data) => {
            const formattedManifest = JSON.stringify(data, null, 4);
            setManifest(formattedManifest);
          });
      };
      fetchManifest();
    }, []);

    return !manifest ? <pre><code>Fetching manifest...</code></pre> : <pre><code>{manifest}</code></pre>;
  };
  

  export default FetchManifestTemplate