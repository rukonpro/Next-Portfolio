"use client";

import {
  EditorContent,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Highlight } from "@tiptap/extension-highlight";
import { TextAlign } from "@tiptap/extension-text-align";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, common } from "lowlight";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { Placeholder } from "@tiptap/extension-placeholder";
import { CharacterCount } from "@tiptap/extension-character-count";
import { Typography } from "@tiptap/extension-typography";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";

const lowlight = createLowlight(common);

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const buttonClasses = "p-2 rounded hover:bg-gray-200";
  const activeClasses = "bg-gray-300";

  return (
    <div className="flex flex-wrap gap-2 p-2 border rounded-t-md bg-gray-50">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${buttonClasses} ${editor.isActive("bold") ? activeClasses : ""}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`${buttonClasses} ${editor.isActive("italic") ? activeClasses : ""}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`${buttonClasses} ${editor.isActive("strike") ? activeClasses : ""}`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`${buttonClasses} ${editor.isActive("code") ? activeClasses : ""}`}
      >
        Code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className={buttonClasses}>
        Clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()} className={buttonClasses}>
        Clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${buttonClasses} ${editor.isActive("paragraph") ? activeClasses : ""}`}
      >
        Paragraph
      </button>
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <button
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          className={`${buttonClasses} ${editor.isActive("heading", { level }) ? activeClasses : ""}`}
        >
          H{level}
        </button>
      ))}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${buttonClasses} ${editor.isActive("bulletList") ? activeClasses : ""}`}
      >
        Bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${buttonClasses} ${editor.isActive("orderedList") ? activeClasses : ""}`}
      >
        Ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${buttonClasses} ${editor.isActive("codeBlock") ? activeClasses : ""}`}
      >
        Code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${buttonClasses} ${editor.isActive("blockquote") ? activeClasses : ""}`}
      >
        Blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className={buttonClasses}>
        Horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()} className={buttonClasses}>
        Hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={buttonClasses}
      >
        Undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={buttonClasses}
      >
        Redo
      </button>
    </div>
  );
};

export default function TipTapEditor({ initialContent = "", onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Underline,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Image,
      Link,
      TextStyle,
      Color,
      TaskList,
      TaskItem,
      Placeholder.configure({
        placeholder: "Write something amazing…",
      }),
      CharacterCount.configure({
        limit: 20000,
      }),
      Typography,
      HorizontalRule,
    ],
    content: initialContent,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange && onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-lg">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-[250px] p-4" />
      {editor && (
        <div className="p-2 border-t">
          {editor.storage.characterCount.characters()} characters
        </div>
      )}
    </div>
  );
}
