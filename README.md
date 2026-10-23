# Rise of the Numberdar

A browser-based political strategy RPG set in **Chak 16 WB, District Vehari**. You play the village Numberdar and try to rise from settling disputes at your Dera to becoming President of Pakistan, with Malik Tori as your rival all the way.

## Play

Open `index.html` in any modern browser (Chrome or Edge recommended for voices). It is a single self-contained file with no build step. Fonts load from Google Fonts. Everything else (art, animation, music, voices) is generated in the page.

To host it, enable **GitHub Pages** for this repository (Settings → Pages → deploy from the `main` branch, root folder).

## What's in it

- **Story:** three stages, 22 story scenes and 8 kinds of daily visitors. Storylines:
  - canal-water faislas and a land grab at Murabba 14
  - the neza bazi horse mela
  - a Joiya–Kamboh blood feud with an ambush gunfight
  - a horseback chase after dacoits
  - a face-off with Malik Tori on the canal bridge
  - elections and Islamabad power politics
- **Your own faisla:** at any decision, type what you want to do in your own words. In the claude.ai artifact, Claude judges it and writes the consequences. Elsewhere, an offline judge interprets it. Between days you can also let Claude invent a brand-new situation from your current state.
- **Realistic characters:** missions and story scenes use a rigged figure with adult proportions, rounded shading on every limb, a detailed side-view face, a kameez that swings with momentum, and a walk based on real gait data with planted feet.
- **Living characters:** articulated bodies with elbows, hands and chappals, shaded faces with eyes, brows and noses. They breathe, look around, nod and gesture while speaking, and walk into scenes.
- **Proper Punjabi and Urdu speech:** every character line is stored in Devanagari script and converted to Gurmukhi or Urdu script on the fly. A Punjabi, Urdu or Hindi voice (whichever your device has) speaks it with native pronunciation, and an English voice never reads Punjabi. The narrator is silent in Punjabi mode and speaks in English mode.
- **Spoken dialogue:** characters speak aloud through your browser's speech engine. Each character has their own voice (male or female, plus their own pitch and speed). The header switches between Punjabi voices, English voices and off. Lines are Roman Punjabi with optional English subtitles.
- **The estate (Dera ⌂):**
  - **Zameen:** 52 acres of cotton, wheat, sugarcane and mango. Buy land and choose crops. A harvest comes in every season.
  - **Mulazim:** guards, drivers, a khansama, a munshi, a farm manager, gunmen, a lawyer. Hire them, give raises, or dismiss them.
  - **Garage:** your fleet, plus a showroom: Hilux Revo, Fortuner, Prado, Land Cruiser 300, Lexus LX 600, Range Rover and G 63. Every new car arrives with its own delivery cutscene.
  - **Ta'aluqat:** how the system really runs, with SHO, DPO, Patwari, Tehsildar, DC, MPA, Party, Sessions court, Press club and Corps HQ. Send gifts, host dinners, and spend favours.
  - **Achievements:** 14 to earn.
- **Five biradaris:** Jatt, Arain, Rajput, Joiya and Kamboh each track their own loyalty.
- **Stats:** Izzat, Khauf, Paisa and Ta'aluqat. Khauf above 80 starts a rebellion. Paisa below zero or Izzat at zero ends the game.
- **18 cutscenes:** include harvest, baraat with fireworks, car delivery, the gunfight, the neza bazi, the horse chase, the Grand Jirga, the MNA victory and the presidential oath. All have film grain and a slow camera push.
- **Sound:** all synthesized with the Web Audio API. Per-scene ambience, a tanpura and dhol score, shehnai, gunfire, hooves, engines, fireworks and applause.
- **Saving:** autosave after every scene, three manual save slots, Load game on the title screen, and New game.
- **Seven endings.**

## Battles in the story

Gunfights are chapters of the campaign, not a separate mode. When the story reaches one, a short in-game cutscene plays: letterbox bars, a title card in Urdu and English, the camera on the crop field as Malik Tori's men push out of it, and Sher Muhammad's voice. Then you take control. Win or lose, the result changes your stats and the story continues, and you can try again if you lose.

- **Qabza: Murabba 14** (Stage 1, dawn): gunmen come out of the sugarcane to take back Bashiran Bibi's land. Fight from behind your tractor and trolley, beside the canal and Tubewell No. 4.
- **Ghaat: The Canal Road** (Stage 2, night): your convoy is pinned down. The Land Cruiser and Prado headlights cut through the dark while men fire from the cane.
- **Hamla: Attack on the Dera** (Stage 2, 2 AM): defend the haveli gate with Sher Muhammad, a guard on the watchtower and your dogs. A pickup full of gunmen drives in with its lights on.
- **Polling Station 112** (Stage 2, election day): two pickups of ballot stuffers and men from the cotton fields try to seize the ECP boxes at the village school.
- **Qafla: Kashmir Highway** (Stage 3, Islamabad at night): gunmen in the green belt open fire on your motorcade, with a police escort and the city skyline behind you.

How they look and play:

- Depth: crops stand in rows. Enemies push through the cane (it rustles and parts), fire from inside it, and step out onto the open ground.
- Detailed vehicles: Land Cruiser, Prado, Hilux, police car, Massey Ferguson tractors and a truck-art trolley. They have turning wheels, working headlights, bullet holes and cracked glass.
- Detailed weapons: Kalashnikov, G3, M4 and 12-bore, with recoil, muzzle flashes, smoke, ejected shells and tracers.
- Night lighting: the dark is lit only by moonlight, lamps, headlights and muzzle flashes.
- Hits by material: sparks off metal, glass shards, wood splinters, straw and dust. Headshots, a kill feed and a slow-motion final kill.
- Your guards are your real mulazim from the Dera screen, by name. Sher Muhammad shouts orders in Punjabi.

You can replay battles you have reached from **Battles ⚔** in the header. Two more missions are there too:

- **Pichha: Chase the Dacoits:** ride Sultan at full gallop and shoot three mounted dacoits before they reach the river.
- **Pind di Sair: Walk the Village:** walk or ride around Chak 16 WB and talk to people.

**Controls:**
- **Keyboard and mouse:** A/D or ←/→ to move, Shift to run, S to take cover, Space to jump, mouse to aim, click to fire, R to reload, E to talk or ride, Esc to pause.
- **Phones:** on-screen buttons (move, run, cover, jump, reload, fire) with automatic aim. Tap to skip a cutscene.

In story scenes, characters now walk in from the side in profile and then turn to face you. Villagers, children, dogs and horses walk past in the foreground.

## Android app / Google Play

**Install on your phone:** open https://github.com/bilalmalik7/16-WB/releases/download/android-latest/Numberdar.apk in the phone's browser, then open the downloaded file. Android asks once to allow installs from your browser. Every push to main updates this link with the newest build. Updates install over the previous version (if you installed a build from before 23 October 2026, uninstall it once first).

The repository is also an Android app (Capacitor). Every push builds a test APK and a Play Store bundle in **Actions → Android build**. [PLAYSTORE.md](PLAYSTORE.md) walks through signing, the Play Console, the store listing (graphics are in `store/`), the privacy policy (`privacy.html`) and the content-rating answers.

On phones held in landscape, the game switches to a full-screen layout: the scene fills the screen, dialogue sits bottom-left, choices sit on the right, and the header buttons fold into a ☰ Menu. In the app, voices use the phone's own text-to-speech engine, and the back button pauses missions and closes menus.

Fonts (Rozha One, Hind, Noto Nastaliq Urdu) are bundled under the SIL Open Font License so the app works offline.

## Controls

Click or press Space to advance dialogue. Press 1–4 to pick a choice.
