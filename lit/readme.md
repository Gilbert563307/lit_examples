//https://s3-kennisbank.tomkemper.nl/frontend/architecture/ux-design.html
//https://s3-kennisbank.tomkemper.nl/frontend/architecture/architectural-patterns.html
atoms SMALLEST ui elements
molecules (atoms all together make up molecules) the doing components
organisms (the sections of a interface )
templates (everything hold together )
pages (see templates)

If we map the atomic design concept to web components, we can see that the smallest building blocks (atoms) are the web components that are used to create the user interface.
These web components are often small and simple, like a button, an input field, or a label.

This is an example of an atom in atomic design. It is a small and simple web component that can be reused in different places in the applicatio

atom
<atom-icon-button name="refresh" @click="handleRefreshClick"></atom-icon-button>

And then we could implement the icon button as a web component that combines the icon and the button, like this:
<atom-button @click="handleRefreshClick">
    <atom-icon name="refresh"></atom-icon>
</atom-button>

molecule
<molecule-icon-button name="refresh" label="Refresh" @click="handleRefreshClick"></molecule-icon-button>



This component needs to render the inbox button from the previous example. This component therefore needs to know the number of unread messages, so it can pass this information to the inbox button. There are two ways to get this information: Either this information is passed to this sidebar component as an attribute, or the sidebar component fetches the data itself.

If we pass the number of unread messages as an attribute, the sidebar component would be a molecule, because it doesn’t have to manage its own state or fetch its own data. It’s however not likely that we would use the sidebar component in other applications, since this component is tightly coupled to the GMail application. So we could also implement the sidebar component as an organism, because it has its own logic and manages its own state. The sidebar component would then fetch the number of unread messages from the server and update the inbox button accordingly. The web component for the sidebar would not need any attributes, because it would fetch the data itself and update the inbox button accordingly. Using this web component in HTML would look like this:
organisms
<organism-gmail-sidebar></organism-gmail-sidebar>
