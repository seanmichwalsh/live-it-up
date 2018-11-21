import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

let input = "# Resources for SCPCers\n\n**Volunteer Sheet**: https://docs.google.com/spreadsheets/d/1AjOm6V3ZG0Jn0y__CR0vxmwXHJp3bOaETq18uPECrac/edit#gid=1777936343\n\n**Marketing form**: https://goo.gl/forms/RjtusxgGqmRm3q6L2\n\n**Points Form**: https://docs.google.com/forms/d/e/1FAIpQLSdXGkAl5uTXE952FiV_XuRejOOQaCx8PnNc_f7iLag6X1U_0A/viewform?usp=sf_link\n\n**Asana**: https://asana.com";

class Resources extends Component {
    render() {
        return (
            <div>
                <ReactMarkdown source={input} />
            </div>
         );
    }
}

export default Resources;