

import './Data.css';
export let titles=["HTML Introduction","HTML Basic Examples","HTML Element","HTMl Headings","HTML Attributes","HTML Paragraphs","HTML Style","HTML Formating","HTML Comments","HTML CSS","HTML links","HTML Image","HTML Favicon","HTML Page Title","HTML Table","HTMl File Paths","HTML - The Head Element","HTML Layout"]
export let contents=[
<div className='main-block'>

        <p className="contenet-head">What is html ?</p>


        <div className="list">
            <li>HTML stands for Hyper Text Markup Language</li>
            <li>HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML elements tell the browser how to display the content</li>
            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li><br></br><br></br>
            <button className='studybtn'>Study our free HTML Tutorial</button>
            <hr />
        </div>
        <div className="code-part">
            <p className='code-content'>A Simple HTML Document</p>
            <div className="div-code">
            <code>
                <pre>
                    {
                        `<!DOCTYPE html>
                        <html>
                        <head>
                        <title>Page Title</title>
                        </head>
                        <body>
                        
                        <h1>My First Heading</h1>
                        <p>My first paragraph.</p>
                        
                        </body>
                        </html>`
                    }
                </pre>
            </code>
            </div>
            <div className="explain">
                <h5>Example Explained</h5>
                <li>The Doctype declaration defines that this document is an HTML5 document</li>
                <li>The HTML Tag element is the root element of an HTML page</li>
                <li>The head element contains meta information about the HTML page</li>
                <li>The title element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
            </div>
        </div>  
</div>,
<div className='main-block'>

        {/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


        <div className="list">
            <li>In this chapter we will show some basic HTML examples.</li>
            <li>Don't worry if we use tags you have not learned about yet.</li>
            <li>All HTML documents must start with a document type declaration: !DOCTYPE html.</li>
            <li>The HTML document itself begins with html and ends with html.</li>
            <li>The visible part of the HTML document is between body and body</li><br></br><br></br>
            <button className='studybtn'>Study our free HTML Tutorial</button>
            <hr />
        </div>
        <div className="code-part">
            <p className='code-content'>Example</p>
            <div className="div-code">
            <code>
                <pre>
                    {
                        `<!DOCTYPE html>
                        <html>
                        <body>
                        
                        <h1>My First Heading</h1>
                        <p>My first paragraph.</p>
                        
                        </body>
                        </html>`
                    }
                </pre>
            </code>
            </div>
            <div className="explain">
                <h5>The DOCTYPE Declaration</h5>
                <li>The DOCTYPE declaration represents the document type, and helps browsers to display web pages correctly.</li>
                <li>It must only appear once, at the top of the page (before any HTML tags).</li>
                <li>The DOCTYPE declaration is not case sensitive.</li>
                <li>The !DOCTYPE declaration for HTML5 is:</li>
            </div>
        </div>  
</div>,


<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>An HTML element is defined by a start tag, some content, and an end tag.</li>
    <li>The HTML element is everything from the start tag to the end tag:</li>
    <li>HTML elements can be nested (this means that elements can contain other elements)..</li>
    <li>All HTML documents consist of nested HTML elements.</li>
    <li>The following example contains four HTML elements :y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>Example Explained</h5>
        <li>The html element is the root element and it defines the whole HTML document.</li>
        <li>It has a start tag and an end tag </li>
        <li>Then, inside the HTML element there is a BODY element:.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>
,


<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>HTML headings are titles or subtitles that you want to display on a webpage.</li>
    <li>HTML headings are defined with the h1 to h6 tags.</li>
    <li> h1 defines the most important heading. h6 defines the least important heading.</li>
    <li>Search engines use the headings to index the structure and content of your web pages..</li>
    <li>Users often skim a page by its headings. It is important to use headings to show the document structure.y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>`
            }
        </pre>
    </code>
    </div>

    <p><li>Note: Use HTML headings for headings only. Don't use headings to make text BIG or bold.</li> </p>
    {/* <div className="explain">
        <h5>Example Explained</h5>
        <li>The html element is the root element and it defines the whole HTML document.</li>
        <li>It has a start tag and an end tag </li>
        <li>Then, inside the HTML element there is a BODY element:.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div> */}
</div>  
</div>,


<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>HTML attributes provide additional information about HTML elements.</li>
    <li>All HTML elements can have attributes</li>
    <li>Attributes provide additional information about elements</li>
    <li>Attributes are always specified in the start tag.</li>
    <li>Attributes usually come in name/value pairs like: name="value"</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<img src="logo.jpg" width="500" height="600">`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>Example Explained</h5>
        <p>The required alt attribute for the img tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.</p>
    </div>
</div>  
</div>,

<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>A paragraph always starts on a new line, and is usually a block of text.</li>
    <li>The HTML p element defines a paragraph</li>
    <li>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</li>
    <li>You cannot be sure how HTML will be displayed..</li>
    <li>The following example contains four HTML elements :y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<p>
                This paragraph
                contains a lot of lines
                in the source code,
                but the browser
                ignores it.
                </p>
                
                <p>
                This paragraph
                contains         a lot of spaces
                in the source         code,
                but the        browser
                ignores it.
                </p>`
            }
        </pre>
    </code>
    </div>
    {/* <div className="explain">
        <h5>Example Explained</h5>
        <li>The html element is the root element and it defines the whole HTML document.</li>
        <li>It has a start tag and an end tag </li>
        <li>Then, inside the HTML element there is a BODY element:.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div> */}
</div>  
</div>,


<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>The HTML style attribute is used to add styles to an element, such as color, font, size, and more..</li>
    <li>The HTML style attribute has the following syntax:</li>
    <li>Setting the style of an HTML element, can be done with the style attribute.</li>
    <li>The CSS background-color property defines the background color for an HTML element..</li>
    <li>The following example contains four HTML elements :y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>Example Explained</h5>
       <li>The HTML <b>strong</b> element defines text with strong importance. The content inside is typically displayed in bold.</li>
<li>Use background-color for background color</li>
<li>Use color for text colors</li>
<li>Use font-family for text fonts</li>
<li>Use font-size for text sizes</li>
<li>Use text-align for text alignment</li>
    </div>
</div>  
</div>,



<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>The HTML em element defines emphasized text. The content inside is typically displayed in italic..</li>
    <li>The HTML mark element defines text that should be marked or highlighted::</li>
    <li>The HTML del element defines text that has been deleted from a document.</li>
    <li>The HTML ins element defines a text that has been inserted into a document. Browsers will usually underline inserted text:.</li>
    <li>The HTML sup element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes,</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `This text is bold

This text is italic

This is subscript and superscript`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>HTML Formatting Elements</h5>
        <p>Formatting elements were designed to display special types of text:</p>
       <li> Tip: A screen reader will pronounce the words in em with an emphasis, using verbal stress.</li>
<li>Use background-color for background color</li>
<li>Use color for text colors</li>
<li>Use font-family for text fonts</li>
<li>Use font-size for text sizes</li>
<li>Use text-align for text alignment</li>
    </div>
</div>  
</div>,


<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>HTML comments are not displayed in the browser, but they can help document your HTML source code.</li>
    <p>HTML Comment Tag</p>
    <li>You can add comments to your HTML source by using the following syntax::</li>
    <li>Notice that there is an exclamation point (!) in the start tag, but not in the end tag.</li>
    <li>Comments can be used to hide content.</li>
    <li>This can be helpful if you hide content temporarily</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<p>This is a paragraph.</p>

<!-- <p>This is another paragraph </p> -->

<p>This is a paragraph too.</p>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        {/* <h5>HTML Formatting Elements</h5>
        <p>Formatting elements were designed to display special types of text:</p>
       <li> Tip: A screen reader will pronounce the words in em with an emphasis, using verbal stress.</li>
<li>Use background-color for background color</li>
<li>Use color for text colors</li>
<li>Use font-family for text fonts</li>
<li>Use font-size for text sizes</li>
<li>Use text-align for text alignment</li> */}
    </div>
</div>  
</div>,

<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>In this chapter we will show some basic HTML examples.</li>
    <li>Don't worry if we use tags you have not learned about yet.</li>
    <li>All HTML documents must start with a document type declaration: !DOCTYPE html.</li>
    <li>The HTML document itself begins with html and ends with html.</li>
    <li>The visible part of the HTML document is between body and body</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>The DOCTYPE Declaration</h5>
        <li>The DOCTYPE declaration represents the document type, and helps browsers to display web pages correctly.</li>
        <li>It must only appear once, at the top of the page (before any HTML tags).</li>
        <li>The DOCTYPE declaration is not case sensitive.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>,

<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>An HTML element is defined by a start tag, some content, and an end tag.</li>
    <li>The HTML element is everything from the start tag to the end tag:</li>
    <li>HTML elements can be nested (this means that elements can contain other elements)..</li>
    <li>All HTML documents consist of nested HTML elements.</li>
    <li>The following example contains four HTML elements :y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>Example Explained</h5>
        <li>The html element is the root element and it defines the whole HTML document.</li>
        <li>It has a start tag and an end tag </li>
        <li>Then, inside the HTML element there is a BODY element:.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>,
<div className='main-block'>

        {/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


        <div className="list">
            <li>In this chapter we will show some basic HTML examples.</li>
            <li>Don't worry if we use tags you have not learned about yet.</li>
            <li>All HTML documents must start with a document type declaration: !DOCTYPE html.</li>
            <li>The HTML document itself begins with html and ends with html.</li>
            <li>The visible part of the HTML document is between body and body</li><br></br><br></br>
            <button className='studybtn'>Study our free HTML Tutorial</button>
            <hr />
        </div>
        <div className="code-part">
            <p className='code-content'>Example</p>
            <div className="div-code">
            <code>
                <pre>
                    {
                        `<!DOCTYPE html>
                        <html>
                        <body>
                        
                        <h1>My First Heading</h1>
                        <p>My first paragraph.</p>
                        
                        </body>
                        </html>`
                    }
                </pre>
            </code>
            </div>
            <div className="explain">
                <h5>The DOCTYPE Declaration</h5>
                <li>The DOCTYPE declaration represents the document type, and helps browsers to display web pages correctly.</li>
                <li>It must only appear once, at the top of the page (before any HTML tags).</li>
                <li>The DOCTYPE declaration is not case sensitive.</li>
                <li>The !DOCTYPE declaration for HTML5 is:</li>
            </div>
        </div>  
</div>,

<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>An HTML element is defined by a start tag, some content, and an end tag.</li>
    <li>The HTML element is everything from the start tag to the end tag:</li>
    <li>HTML elements can be nested (this means that elements can contain other elements)..</li>
    <li>All HTML documents consist of nested HTML elements.</li>
    <li>The following example contains four HTML elements :y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>Example Explained</h5>
        <li>The html element is the root element and it defines the whole HTML document.</li>
        <li>It has a start tag and an end tag </li>
        <li>Then, inside the HTML element there is a BODY element:.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>,
<div className='main-block'>

        {/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


        <div className="list">
            <li>In this chapter we will show some basic HTML examples.</li>
            <li>Don't worry if we use tags you have not learned about yet.</li>
            <li>All HTML documents must start with a document type declaration: !DOCTYPE html.</li>
            <li>The HTML document itself begins with html and ends with html.</li>
            <li>The visible part of the HTML document is between body and body</li><br></br><br></br>
            <button className='studybtn'>Study our free HTML Tutorial</button>
            <hr />
        </div>
        <div className="code-part">
            <p className='code-content'>Example</p>
            <div className="div-code">
            <code>
                <pre>
                    {
                        `<!DOCTYPE html>
                        <html>
                        <body>
                        
                        <h1>My First Heading</h1>
                        <p>My first paragraph.</p>
                        
                        </body>
                        </html>`
                    }
                </pre>
            </code>
            </div>
            <div className="explain">
                <h5>The DOCTYPE Declaration</h5>
                <li>The DOCTYPE declaration represents the document type, and helps browsers to display web pages correctly.</li>
                <li>It must only appear once, at the top of the page (before any HTML tags).</li>
                <li>The DOCTYPE declaration is not case sensitive.</li>
                <li>The !DOCTYPE declaration for HTML5 is:</li>
            </div>
        </div>  
</div>,
<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>An HTML element is defined by a start tag, some content, and an end tag.</li>
    <li>The HTML element is everything from the start tag to the end tag:</li>
    <li>HTML elements can be nested (this means that elements can contain other elements)..</li>
    <li>All HTML documents consist of nested HTML elements.</li>
    <li>The following example contains four HTML elements :y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>Example Explained</h5>
        <li>The html element is the root element and it defines the whole HTML document.</li>
        <li>It has a start tag and an end tag </li>
        <li>Then, inside the HTML element there is a BODY element:.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>,<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>In this chapter we will show some basic HTML examples.</li>
    <li>Don't worry if we use tags you have not learned about yet.</li>
    <li>All HTML documents must start with a document type declaration: !DOCTYPE html.</li>
    <li>The HTML document itself begins with html and ends with html.</li>
    <li>The visible part of the HTML document is between body and body</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>The DOCTYPE Declaration</h5>
        <li>The DOCTYPE declaration represents the document type, and helps browsers to display web pages correctly.</li>
        <li>It must only appear once, at the top of the page (before any HTML tags).</li>
        <li>The DOCTYPE declaration is not case sensitive.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>,
<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>An HTML element is defined by a start tag, some content, and an end tag.</li>
    <li>The HTML element is everything from the start tag to the end tag:</li>
    <li>HTML elements can be nested (this means that elements can contain other elements)..</li>
    <li>All HTML documents consist of nested HTML elements.</li>
    <li>The following example contains four HTML elements :y</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>Example Explained</h5>
        <li>The html element is the root element and it defines the whole HTML document.</li>
        <li>It has a start tag and an end tag </li>
        <li>Then, inside the HTML element there is a BODY element:.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>,<div className='main-block'>

{/* <p className="contenet-head">In this chapter we will show some basic HTML examples.

Don't worry if we use tags you have not learned about yet.</p> */}


<div className="list">
    <li>In this chapter we will show some basic HTML examples.</li>
    <li>Don't worry if we use tags you have not learned about yet.</li>
    <li>All HTML documents must start with a document type declaration: !DOCTYPE html.</li>
    <li>The HTML document itself begins with html and ends with html.</li>
    <li>The visible part of the HTML document is between body and body</li><br></br><br></br>
    <button className='studybtn'>Study our free HTML Tutorial</button>
    <hr />
</div>
<div className="code-part">
    <p className='code-content'>Example</p>
    <div className="div-code">
    <code>
        <pre>
            {
                `<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>`
            }
        </pre>
    </code>
    </div>
    <div className="explain">
        <h5>The DOCTYPE Declaration</h5>
        <li>The DOCTYPE declaration represents the document type, and helps browsers to display web pages correctly.</li>
        <li>It must only appear once, at the top of the page (before any HTML tags).</li>
        <li>The DOCTYPE declaration is not case sensitive.</li>
        <li>The !DOCTYPE declaration for HTML5 is:</li>
    </div>
</div>  
</div>




    













]