const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>,
        <script src="https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.js"></script>,
        <script>
            hljs.highlightAll();
            hljs.addPlugin(new CopyButtonPlugin());
        </script>,
        <script src="https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.js"></script>,
        <script type="text/javascript" src={"/script.js"} />,

    ]);
};