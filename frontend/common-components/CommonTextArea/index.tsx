"use client";

import React, { useEffect, useRef } from "react";

import "quill/dist/quill.snow.css";

import CommonToolTip from "@/common-components/CommonToolTip";

interface CommonTextAreaProps {
  labelText?: string;
  tooltipContent?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function CommonTextArea({
  labelText,
  tooltipContent,
  initialValue = "",
  onChange,
  placeholder = "Enter your description",
}: CommonTextAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);
  const onChangeRef = useRef(onChange);
  const isUpdatingRef = useRef(false);
  const lastEmittedValueRef = useRef<string | null>(null);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const handleTextChange = () => {
      if (quillRef.current && !isUpdatingRef.current) {
        const html = quillRef.current.root.innerHTML;

        lastEmittedValueRef.current = html;
        onChangeRef.current?.(html);
      }
    };

    const initQuill = async () => {
      const editorEl = editorRef.current;

      if (typeof window === "undefined" || !editorEl || quillRef.current) {
        return;
      }

      if (
        editorEl.dataset.quillInitializing === "true" ||
        editorEl.dataset.quillInitialized === "true"
      ) {
        return;
      }

      editorEl.dataset.quillInitializing = "true";

      const Quill = (await import("quill")).default;

      if (!editorRef.current || editorRef.current !== editorEl) {
        delete editorEl.dataset.quillInitializing;

        return;
      }

      quillRef.current = new Quill(editorEl, {
        theme: "snow",
        placeholder: placeholder,
        modules: {
          toolbar: [
            [{ header: [2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
      });

      if (initialValue) {
        quillRef.current.root.innerHTML = initialValue;
        lastEmittedValueRef.current = initialValue;
      }

      quillRef.current.on("text-change", handleTextChange);
      delete editorEl.dataset.quillInitializing;
      editorEl.dataset.quillInitialized = "true";
    };

    initQuill();

    return () => {
      if (quillRef.current) {
        quillRef.current.off("text-change", handleTextChange);
        quillRef.current = null;
      }

      const editorEl = editorRef.current;

      if (editorEl) {
        delete editorEl.dataset.quillInitializing;
        delete editorEl.dataset.quillInitialized;
        editorEl.classList.remove("ql-container");
        editorEl.innerHTML = "";
      }

      const toolbarEl = containerRef.current?.querySelector(".ql-toolbar");

      if (toolbarEl) {
        toolbarEl.remove();
      }
    };
  }, [placeholder]);

  // Обновление содержимого при изменении initialValue
  useEffect(() => {
    if (!quillRef.current || initialValue === undefined) return;

    // Если значение совпадает с последним отправленным, не обновляем
    if (lastEmittedValueRef.current === initialValue) return;

    const currentHtml = quillRef.current.root.innerHTML;

    if (currentHtml !== initialValue) {
      isUpdatingRef.current = true;
      quillRef.current.root.innerHTML = initialValue;
      lastEmittedValueRef.current = initialValue;
      isUpdatingRef.current = false;
    }
  }, [initialValue]);

  const label = (
    <div className="flex items-center gap-1 text-left">
      <span>{labelText}</span>
      {tooltipContent && <CommonToolTip content={tooltipContent} />}
    </div>
  );

  return (
    <div className="common-textarea__component">
      {labelText && <div className="mb-2">{label}</div>}
      <div
        ref={containerRef}
        className="quill-container-wrapper"
      >
        <div
          ref={editorRef}
          id="quill-editor-inner"
          className="quill-editor"
        />
      </div>
    </div>
  );
}

export default CommonTextArea;
