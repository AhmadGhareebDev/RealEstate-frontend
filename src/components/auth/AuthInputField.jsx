import React from 'react';

const AuthInputField = ({ label, type = "text", placeholder, required = false, icon }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="label-sm text-on-surface/40 flex items-center gap-2">
      {icon}
      {label.toUpperCase()} {required && <span className="text-primary">*</span>}
    </label>
    <input 
      type={type}
      placeholder={placeholder}
      className="bg-surface-container-low border border-white/5 focus:border-primary/40 focus:outline-none px-5 py-3.5 rounded-lg text-sm text-white transition-all placeholder:text-white/10"
    />
  </div>
);

export default AuthInputField;
