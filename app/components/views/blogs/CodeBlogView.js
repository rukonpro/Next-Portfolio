"use client"
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlog = ({language,children}) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={atomDark}
        >
            {children}
        </SyntaxHighlighter>

    );
};

export default CodeBlog;