---
layout: splash
classes: wide
permalink: /how-to-install/
---



# How to install

<p class="notice--success">Paste <a href="https://raw.githubusercontent.com/Regnareb/Houdini/refs/tags/v0.3.1/python2.7libs/tools/installer.py"><strong>this script</strong></a> to <strong>Houdini &gt; Window &gt; Python Source Editor &gt; Accept</strong></p>

<br>

Here is what the script does:
 * Download the [latest release](https://github.com/Regnareb/Houdini/releases/latest/download/Houdini-tools.zip) 
 * Extract its content to the Houdini prefs folder 
 * Modify the file `Houdini-tools/REGNAREB.json`, replace `$REGNAREB` with the path to the folder of the folder `Houdini-tools`  
 * Move the `REGNAREB.json` file in a `packages` folder of your Houdini preferences folder


If everything is working fine, it should show that window on the next start of Houdini:


<img src="{{ site.url }}{{ site.baseurl }}/assets/images/first_launch.png" alt="">


For more tool preferences, activate the Regnareb shelf and press the Preferences button.  
You can also auto-update the tools by clicking the Update button.

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/preferences.png" alt="">


### For Developers
You can download the code by doing
```
git clone --recurse-submodules -c core.symlinks=true --remote-submodules https://github.com/Regnareb/Houdini.git
```


# How to uninstall

If you want to uninstall the tools, just delete the file `packages/regnareb.json` in your Houdini preferences 
