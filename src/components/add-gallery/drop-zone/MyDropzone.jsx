import { Label } from 'flowbite-react'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export const MyDropzone = ({ setPhotos, isLoading }) => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files

        if (acceptedFiles.lenght <= 0) {
            return;
        }

        setPhotos(prev => {
            const noRepeatedElements = prev.concat(acceptedFiles)
                .filter((v, i, a) => i === a.findIndex(e => e.path === v.path));
            return noRepeatedElements;
        });

    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],

        },
        disabled: isLoading,

    })

    return (

        <div {...getRootProps()} className="flex w-full items-center justify-center">
            <Label
                htmlFor="dropzoneFile"
                className=" flex h-30 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300  hover:bg-gray-100 "
            >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                        className="mb-4 h-8 w-8 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <span name='dropzoneFile' id='dropzoneFile' {...getInputProps()} ></span>
                    <p className="mb-2 text-sm text-gray-500  Be-Vietnam-Pro">
                        <span className="font-semibold ">Click to upload</span> or drag and
                        drop
                    </p>
                    <p className="text-xs text-gray-500  Be-Vietnam-Pro">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                </div>
            </Label>
        </div>

    )
}