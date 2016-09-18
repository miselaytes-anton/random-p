const React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
      <head>

        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16"/>
        <link rel="manifest" href="/favicon/manifest.json"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>

        <title>{this.props.title}</title>

        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

        <link href="css/clean-blog.min.css" rel="stylesheet"/>

        <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'/>
        <link
          href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
          rel='stylesheet' type='text/css'/>

      </head>
      <body style={{backgroundColor: "floralwhite"}}>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = Layout;