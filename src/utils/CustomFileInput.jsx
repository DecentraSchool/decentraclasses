import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const CustomFileInput = ({ selectedFiles, setSelectedFiles }) => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.click();
  };

  // 3. convert FileList to File[]
  const handleChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
      className="w-full"
    >
      {selectedFiles?.length == 1 ? (
        <div
          style={{ width: "50%" }}
          onClick={handleClick}
          className="p-6  flex flex-col  align-middle items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer"
        >
          <span>File added, click upload</span>
        </div>
      ) : (
        <div
          style={{ width: "50%" }}
          onClick={handleClick}
          className="p-6  flex flex-col  align-middle items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer"
        >
          <FontAwesomeIcon icon={faCloudArrowUp} className="w-10 h-10" />
          <span>Choose some files to upload</span>
          <input type="file" ref={ref} className="hidden" onChange={handleChange} />
        </div>
      )}

      <div>
        {/* <div>{selectedFiles}</div> */}
        {/* {!!selectedFiles && (
          <div style={{ width: "50%" }} className="p-4 mt-4 bg-violet-500 overflow-hidden text-ellipsis">
            <p className="text-white">Selected Files:</p>
            {selectedFiles.files.item(0)}
            {selectedFiles.map((file, i) => {
              return (
                <span key={i} className="text-white whitespace-nowrap">
                  {file.name}
                </span>
              );
            })}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default CustomFileInput;
