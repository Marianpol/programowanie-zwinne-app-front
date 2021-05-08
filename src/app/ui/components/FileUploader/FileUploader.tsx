import clsx from "clsx";
import React from "react";
import s from "./FileUploader.module.css";

export interface FileUploaderProps {
  name: string;
  value: any;
  onChange: (event: any) => void;
  className?: string;
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
}

const FileUploader = ({
  name,
  value,
  onChange,
  label,
  className,
  fullWidth,
  required,
  ...props
}: FileUploaderProps) => {
  const rootClassName = clsx(s.root, { [s.fullWidth]: fullWidth });
  const req = required ? "*" : "";
  return (
    <div className={rootClassName}>
      <input {...props} type="file" multiple name={name} value={value} onChange={onChange} />
      {label ? (
        <label htmlFor={name} className={s.label}>
          {`${label}${req}`}
        </label>
      ) : null}

      <ul>
        {value.map((_, index: number) => (
          <li key={index}>{index}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;
