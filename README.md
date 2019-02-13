# CdsAngularLibrary

This project is an angular library seed project which helps you develop your angular library quickly.

# Guideline of how to use this seed project to develop angular library for CDS 
[Guidelines](lib/README.md)

# Component development guideline

To know more information about how to develop Components for your project and use it with CDS  [CDS Components Library](https://uidesigner.accenture.com/gitlab/cds-core/Component-repositry/blob/master/README.md).
"# libtree" 

1. Preparation before local dev test
  1.1 libtree.component.css
    change 
      [@import "./lib/assets/css/glyphicons-halflings.css";] 
    to 
      [@import "../../assets/css/glyphicons-halflings.css";]
  1.2 glyphicons-halflings.css
    change 
      [
        src: url('/assets/fonts/glyphicons-halflings-regular.eot');
        src: url('/assets/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), 
        url('/assets/fonts/glyphicons-halflings-regular.woff2') format('woff2'), 
        url('/assets/fonts/glyphicons-halflings-regular.woff') format('woff'), 
        url('/assets/fonts/glyphicons-halflings-regular.ttf') format('truetype'), 
        url('/assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
      ] 
    to 
      [
        src: url('../../assets/fonts/glyphicons-halflings-regular.eot');
        src: url('../../assets/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), 
        url('../../assets/fonts/glyphicons-halflings-regular.woff2') format('woff2'), 
        url('../../assets/fonts/glyphicons-halflings-regular.woff') format('woff'), 
        url('../../assets/fonts/glyphicons-halflings-regular.ttf') format('truetype'), 
        url('../../assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
      ]

2. Preparation before（npm run packagr）
  2.1 libtree.component.css
    change 
      [@import "../../assets/css/glyphicons-halflings.css";]
    to 
      [@import "./lib/assets/css/glyphicons-halflings.css";] 
  2.2 glyphicons-halflings.css
    change 
       [
        src: url('../../assets/fonts/glyphicons-halflings-regular.eot');
        src: url('../../assets/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), 
        url('../../assets/fonts/glyphicons-halflings-regular.woff2') format('woff2'), 
        url('../../assets/fonts/glyphicons-halflings-regular.woff') format('woff'), 
        url('../../assets/fonts/glyphicons-halflings-regular.ttf') format('truetype'), 
        url('../../assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
      ]
    to 
      [
        src: url('/assets/fonts/glyphicons-halflings-regular.eot');
        src: url('/assets/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), 
        url('/assets/fonts/glyphicons-halflings-regular.woff2') format('woff2'), 
        url('/assets/fonts/glyphicons-halflings-regular.woff') format('woff'), 
        url('/assets/fonts/glyphicons-halflings-regular.ttf') format('truetype'), 
        url('/assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
      ]

3. Preparation after（npm run packagr）before zip
  3.1 copy lib\assets\fonts into dist\assets\
      
