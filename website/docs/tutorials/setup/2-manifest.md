# Create a manifest

Now that you have created your Live App, let’s create the associated manifest.

A manifest is a `.json` file providing information about your Live App.

Create a `manifest.json` file at the root of your project and paste in the following content:

```json
{
  "id": "tuto-app",
  "name": "Tuto app",
  "url": "http://localhost:3000",
  "homepageUrl": "https://developers.ledger.com/",
  "icon": "",
  "platform": "all",
  "apiVersion": "0.0.1",
  "manifestVersion": "1",
  "branch": "debug",
  "categories": ["tools"],
  "currencies": "*",
  "content": {
    "shortDescription": {
      "en": "Simple boilerplate Tuto Live App. Use at your own risk."
    },
    "description": {
      "en": "Simple boilerplate Tuto Live App. Use at your own risk."
    }
  },
  "permissions": [
    {
      "method": "*"
    }
  ],
  "domains": ["https://*"]
}
```

We won’t go too much into the details of each field in this tutorial (check out the manifest file reference [here](https://developers.ledger.com/docs/platform-app/manifest/) for explanation of each field).

The main thing you have to care about for now is the `url` field, it must match the url of your Live App. Here it is set at `http://localhost:3000` because we are currently running our app in local for development and test purposes.

Now that we have our Live App manifest, we need to add it into Ledger Live, this is what we will see in the next section.
