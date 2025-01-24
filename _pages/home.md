---
layout: splash
classes: wide
permalink: /
hidden: false
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/mm-home-page-feature.jpg
  actions:
    - label: "<i class='fas fa-download'></i> Install now"
      url: "/docs/quick-start-guide/"
      copy_url: "https://raw.githubusercontent.com/Regnareb/Houdini/refs/heads/main/python2.7libs/tools/installer.py"
      copy_title: "Copy the code and execute it in Python Source Editor"
excerpt: >
  A collection of tools to set default preferences automatically and make Houdini more usable and stable.<br />
  <small><a href="https://github.com/Regnareb/Houdini/releases/latest">Latest release v0.3.1</a></small>
feature_row1:
  - video_path: /assets/videos/propagate_display.mp4
    title: "Propagate display flag to children"
    excerpt: "Each time you connect a node to one with a display flag, the flag is transferred to the new one"
    url2: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
feature_row2:
  - video_path: /assets/videos/paste_object_merge.mp4
    title: "Create object merge from clipboard"
    excerpt: "Create an Object merge with references to all copied nodes (Alt+V)"
    url2: "/docs/layouts/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
feature_row3:
  - video_path: /assets/videos/create_nulls.mp4
    title: "Alt+click to create Nulls"
    excerpt: "automatically create Nulls with correct names for all selected nodes"
    url2: "/docs/license/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
feature_row4:
  - video_path: /assets/videos/connect_all_nodes.mp4
    title: "Connect nodes by height position"
    excerpt: "press Shift+Y amd all selected nodes will be connected in the order of their height"
    url2: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
feature_row5:
  - video_path: /assets/videos/cycle_display.mp4
    title: "Improved Cycle Display"
    excerpt: "Cycle display flag between all selected nodes. Continue working after deselecting them"
    url2: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
feature_row6:
  - video_path: /assets/videos/node_preview.mp4
    title: "Create Node Previews"
    excerpt: "Put a preview of the node like TouchDesigner. Very slow and experimental"
    url2: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
feature_row7:
  - video_path: /assets/videos/change_viewport_color.mp4
    title: "Change Viewport Color"
    excerpt: "Add a shortcut to switch the background color of viewports"
    url2: "/docs/configuration/"
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
- ~~Set view to "Show Display Operator"~~ Not possible yet
- ~~Set view to "Hide other objects"~~ Not possible yet

This will make loading the scenes faster and more stable.


</div>
</div>


<hr>

# Network View Improvements 

<br/>


{% include feature_row id="feature_row1" type="center" %}

{% include feature_row id="feature_row2" type="center" %}

{% include feature_row id="feature_row3" type="center" %}

{% include feature_row id="feature_row4" type="center" %}

{% include feature_row id="feature_row5" type="center" %}

{% include feature_row id="feature_row6" type="center" %}

{% include feature_row id="feature_row7" type="center" %}


# Shortcuts
- Paste parameters (Ctrl+Shift+C / Ctrl+Shift+V)
- Change particle types of display (Shift+D)
- Show dependency links (Ctrl+D)
- Toggle cooking mode (F10)
- Scrub Timeline (K) (Video)
- Network Clipboard - Send selected nodes to another user on the same network



