# Publishing Rise of the Numberdar on Google Play

The Android app is a [Capacitor](https://capacitorjs.com) wrapper around `index.html`. GitHub Actions builds it on every push, so you don't need Android Studio.

## What the build produces

Every push to `main` runs **Actions → Android build** and attaches two downloads to the run:

| Artifact | What it is | Use it for |
|---|---|---|
| `numberdar-debug-apk` | Debug APK | Install directly on your phone to test (allow "install unknown apps") |
| `numberdar-release-aab` | Release App Bundle (`.aab`) | Upload to Google Play. It must be signed (step 1). |

App ID: `com.bilalmalik7.numberdar`. Change it in `capacitor.config.json` **and** `android/app/build.gradle` (`namespace`, `applicationId`) **before** your first upload. Play never lets you change it afterwards.

## 1. Create your upload key (one time, on your computer)

You need Java (any JDK) for `keytool`:

```bash
keytool -genkeypair -v -keystore numberdar-upload.jks -alias numberdar -keyalg RSA -keysize 2048 -validity 10000
base64 -w0 numberdar-upload.jks > numberdar-upload.b64     # macOS: base64 -i numberdar-upload.jks -o numberdar-upload.b64
```

Keep `numberdar-upload.jks` and its passwords safe and private. **Never commit them.**

## 2. Add the key to GitHub

Repository → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
|---|---|
| `ANDROID_KEYSTORE_BASE64` | contents of `numberdar-upload.b64` |
| `ANDROID_KEYSTORE_PASSWORD` | the keystore password |
| `ANDROID_KEY_ALIAS` | `numberdar` (or the alias you chose) |
| `ANDROID_KEY_PASSWORD` | the key password |

Then run **Actions → Android build → Run workflow**. The `.aab` it produces is now signed with your upload key.

## 3. Play Console

1. Create a developer account at <https://play.google.com/console> (one-time USD 25 fee, identity verification).
2. **Create app** → name "Rise of the Numberdar", type *Game*, *Free*.
3. Enable **Play App Signing** (the default). Google keeps the app signing key; your key is only the upload key.
4. **Testing → Internal testing → Create release** → upload the `.aab` → add yourself as a tester. New personal developer accounts must also run a **closed test with at least 12 testers for 14 days** before production.

## 4. Store listing (files in `store/`)

| Field | File / text |
|---|---|
| App icon (512×512) | `store/icon-512.png` |
| Feature graphic (1024×500) | `store/feature-graphic-1024x500.png` |
| Phone screenshots (1920×1080) | `store/shot1-title.png` … `store/shot6-garage.png` |
| Short description (80 chars) | `Rise from village Numberdar to President in rural Punjab. Gunfights, horses, faislas.` |
| Category | Strategy (or Role Playing) |

Full description, a starting point you can edit:

> Rise of the Numberdar is a political strategy and action game set in Chak 16 WB, District Vehari. Settle disputes at your Dera, win over five biradaris, manage 52 acres, your mulazim and a garage of Land Cruisers, then fight your way to the National Assembly and the President House.
>
> • Story choices with real consequences across three stages
> • Characters speak Punjabi, with English subtitles
> • Defend your Dera in night gunfights, ride your horse Sultan after dacoits, and walk the village
> • Type your own faisla in your own words
> • Seven endings

## 5. Policy forms

- **Privacy policy URL:** turn on GitHub Pages (Settings → Pages → `main` / root). The policy is then at `https://bilalmalik7.github.io/16-wb/privacy.html`.
- **Data safety:** "No data collected" and "No data shared". Saves stay on the device.
- **Ads:** No ads.
- **Content rating (IARC questionnaire):** answer honestly. The game has *realistic violence* (gunfights, no blood), *simulated betting with in-game money* (the mela and kabaddi bets), and *crude humour/political themes*. Expect roughly a Teen / PEGI 12–16 rating.
- **Target audience:** 13+ (not designed for children).

## Notes

- Target SDK is 36 (Android 16) and minimum SDK is 24 (Android 7). The game is landscape and full-screen. Android 16 lets tablets and foldables override the orientation, and the game's layout handles portrait too.
- Voices use the phone's text-to-speech engine. Every character line is stored in script, not just Roman letters. The app speaks Gurmukhi with a Punjabi voice (`pa-IN`), Urdu script with an Urdu voice (`ur-PK`/`ur-IN`), or Devanagari with a Hindi voice (`hi-IN`), whichever the phone has. It never reads Punjabi with an English voice. If none is installed, characters use voice sounds and the game says which voice to install (Settings → Text-to-speech → Speech Services by Google → install Urdu, Punjabi or Hindi voice data).
- The "Let Claude write what happens" and Claude-judged faisla features need the claude.ai artifact and are not available in the app. In the app, typed decisions use the offline judge.
- Each push builds a higher `versionCode` (the Actions run number), which Play requires for every new upload.
