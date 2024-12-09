---
title: Getting a Spotify Token
---

For GlanceThing to receive realtime updates about your Spotify playback, we need a special token from Spotify called `sp_dc`. You could think of this as a "user" token instead of the regular tokens you get via their developer page. This unlocks a special endpoint that the Spotify client uses, which gives realtime updates about Spotify Connect playback.
The token will be securely encrypted using your machine's TPM chip, if you have one.

### Getting your `sp_dc` cookie

1. Open https://open.spotify.com and log in if you haven't already
2. Open DevTools in your browser (usually CTRL+SHIFT+I)
3. Go to `Storage` (Firefox), or `Application` (Chrome/derivatives)
3. Go to `Cookies`, `https://open.spotify.com`, and search up `sp_dc`
4. Copy the value

That's it! Now paste the token on the Spotify step of GlanceThing setup. To change the token if you're ever logged out, you can repeat the same steps and change the token in settings.