# How to Develop a Component
## Step 1:
1. We need to generate a component repository. There must be dist/assets folder and index.ts/package.json/component.json files what will be necessary.
- repository stucture like this: 
<pre><code>
│   index.ts
│   package.json
│   component.json
│
├───assets
│       icon.png
│
└───src
        template.module.ts
        template.component.ts
</code></pre>
2. We may also generate a entry file(index) and program files under src folder to customize component optionally.

## Step 2:
###  We need to update [component.json]
#### Varibles Description
* **_type**: 
component type, it should be unique.
* **_order**: 
Display order in component list.
* **_isNative**: 
If set false, properties panel will only show properties that defined in component.json. 
* **_cdsNode**: 
"type"(tag), "name"(selector), "attribs"
* **_sortType**: 
Sort type in component list. User can filter by this type. "General", "Layout", "Navigation", "Data Entry", "Data Display", "Feedback", "Other", and you can add your own type.
* **_componentListHTML**: 
The component icon displayed in component list.
* **_label**: 
The component name displayed in component list.
* **_containerRef**: 
If set, the component will show as a container component. User can drag other component into it.
* **_requiredContainers**: 
Defined the containers for the component.Drag to others containers is not allowed.

Component.json describes the information of node tree config of button(cdsNode)<br />
like this:
<pre>
<code>
 &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot; value=&quot;0&quot; [disabled]=&quot;false&quot;&gt;button&lt;/button&gt;
</code>
</pre>
stand for:
<pre>
<code>
{
	"type": "tag",
	"name": "button",
	"attribs": {
		"cds-id": "angular_button",
		"class": "btn btn-default",
		"type": "button",
		"[disabled]": "false"
	},
	"children": [{
		"data": "button",
		"type": "text"
	}]
}
</code>
</pre>
And its properties. at the meanwhile, describes its display order in CDS, component categories and base frameworks.



## Step 3: We need to update [package.json]
- Package.json is npm standard description, these properties can be refered by [NPM official site](https://www.npmjs.com/package/package.json)

# How to Bind Component Properties With CDS
* If we want to develop a front-end application through CDS, then we have to set some properties of component. CDS has provided a setting standard of property.
* Setting property configure is at [component.json], there is a variable named properties,
* We can see, there are some variables under properties which will give notice to CDS how to set properties so that component will be display or behavior changed when properties are setting.

#### Varibles Description
* **id**: 
property unique identify.
* **label**: 
The label will be displayed as properties panel label
* **target**: 
target will generate as HTML attribute.
* **type**: 
property setting type in properties panel. support "text", "list", "boolean", "numeric", "color", "input-resource", "event"...
* **weight**: 
sort order by weight displayed in properties panel. same weight will displayed as defined order.
* **taxonomy**: 
taxonomy in properties panel. support "component", "appearance", "text", "composition", "interaction" and custom child settings.
* **description**: 
description will displayed when hover on "?" icon in properties panel.

## optional

* **readonly**: 
If set to true, the property can't be changed by user.
* **defaultValue**: 
the default value of the property.
* **parent**: 
If the property has a children settings.
* **values**: 
the selectable values.

