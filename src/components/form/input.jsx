import { ErrorMessage, Field } from "formik";

export default function Input({
  name,
  text,
  type = "text",
  description = null,
  placeholder = "",
}) {
  return (
    <div className="grid grid-cols-1  font-jakarta  ">
      <label className=" text-xs color-black   mb-1   ">
        {text} <sup className="text-red text-[#FF2020]">*</sup>
      </label>
      <Field
        name={name}
        className="py-2 px-6 rounded
         border-1  
          mt-1  placeholder:text-[#808080]
        "
        type={type}
        autoComplete="off"
        autoCorrect="off"
        placeholder={placeholder}
      />
      {description && (
        <p className="text-sm font-jakarta mt-2 text-[#000]">{description}</p>
      )}
      <ErrorMessage
        name={name}
        component="span"
        className="text-xs text-red-400 mt-2"
      />
    </div>
  );
}
