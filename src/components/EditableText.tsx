import React, { useState } from "react";

interface EditableTextProps {
  initialHtml: string; // Le contenu HTML initial.
  onContentChange?: (newHtml: string) => void; // Callback pour transmettre le HTML mis à jour.
  style?: React.CSSProperties; // Style personnalisé pour le rectangle.
}

function EditableText (props: EditableTextProps) {
    const { initialHtml, onContentChange, style } = props;
    const [isEditing, setIsEditing] = useState(false);

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onContentChange && onContentChange(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
    <div
        style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px",
            minHeight: "100px",
            cursor: isEditing ? "text" : "pointer",
            ...style,
        }}
        onClick={() => setIsEditing(true)}
    >
        {isEditing ? (
            <textarea
                value={initialHtml}
                onChange={handleContentChange}
                onBlur={handleBlur}
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    fontSize: "inherit",
                    fontFamily: "inherit",
                }}
            />
        ) : (
            <div dangerouslySetInnerHTML={{ __html: initialHtml }} />
        )}
    </div>
  );
};

export default EditableText;
