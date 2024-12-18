type FileInputProps = {
  file: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput: React.FC<FileInputProps> = ({ file, onChange }) => {
  return (
    <div className="hover:border-red-primary/50 rounded-md border border-dashed border-gray-300 p-4 text-center transition-colors hover:bg-red-50/20">
      <input
        type="file"
        name="attachment"
        onChange={onChange}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <p className="text-gray-500">Adjuntar Archivos</p>
        <p className="text-sm text-gray-400">
          {file ? file.name : "Arrastra & Suelta tu archivo."}
        </p>
      </label>
    </div>
  );
};
