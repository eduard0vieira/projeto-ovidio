import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          block w-full px-4 py-3
          border border-gray-300 rounded-lg shadow-sm
          text-gray-900 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          transition-all duration-150
          ${className}
        `}
      />
    </div>
  );
};
