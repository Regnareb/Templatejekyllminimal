---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/mm-home-page-feature.jpg
  actions:
    - label: "<i class='fas fa-download'></i> Install now"
      url: "/docs/quick-start-guide/"
      copy_url: "https://raw.githubusercontent.com/Regnareb/Houdini/refs/heads/main/python2.7libs/tools/installer.py"
      copy_title: "Copy and paste the code and execute it in Python Source Editor"
excerpt: >
  A collection of tools to set default preferences automatically and make Houdini more usable and <acronym title="https://raw.githubusercontent.com/Regnareb/Houdini/refs/heads/main/python2.7libs/tools/installer.py" >stable</acronym>.<br />
  <small><a href="https://github.com/Regnareb/Houdini/releases/latest">Latest release v0.3.1</a></small>
feature_row:
  - video_path: /assets/videos/auto_connect_nodes.mp4
    title: "Propagate display flag to children"
    excerpt: "Each time you connect a node to one with a display flag, the flag is transferred to the new one"
    url: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
  - video_path: /assets/videos/auto_connect_nodes.mp4
    alt: "fully responsive"
    title: "Create object merge from clipboard (Ctrl+C Alt+V)"
    excerpt: "create an Object merge with references to all copied nodes"
    url: "/docs/layouts/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
  - video_path: /assets/videos/auto_connect_nodes.mp4
    alt: "100% free"
    title: "Alt+click to create Nulls"
    excerpt: "automatically create Nulls with correct names for all selected nodes"
    url: "/docs/license/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
  - video_path: /assets/videos/auto_connect_nodes.mp4
    title: "Connect nodes by height position"
    excerpt: "press Shift+Y amd all selected nodes will be connected in the order of their height"
    url: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label: "Learn more"   
---


<div class="row">
  <div class="column" markdown="1"  >

    
# Default Preferences
- Disable Nodes Shapes
- Use Simple Node Shapes
- Disable Auto Move Nodes
- Disable Nodes Animations
- Set Low Size to Show Ring
- Show Displayed Node instead of Selected Node
- Create Tools In Context
- Set UI to Compact Mode
- Startup with a specific Desktop


</div>
<div class="column" markdown="1" >
  
# On Scene Open

- Apply the default Desktop
- Set Cooking mode to Manual
- Set view to “Show Display Operator” ~~Not possible yet~~
- Set view to “Hide other objects” ~~Not possible yet~~

This will make loading the scenes faster and more stable.


</div>
</div>


<hr>

# Network View Improvements 

<br/>

{% include feature_row %} 


# Shortcuts
- Paste parameters (Ctrl+Shift+C / Ctrl+Shift+V)
- Change particle types of display (Shift+D)
- Show dependency links (Ctrl+D)
- Toggle cooking mode (F10)
- Changing viewport background color (Shift+B):


- Scrub Timeline (K) (Video)

- Network Clipboard - Send selected nodes to another user on the same network



