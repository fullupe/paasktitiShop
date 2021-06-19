import { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import { db, Storage, timestamp } from "../firebase/config";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

import firebase from "firebase";

import useStorage from "../hooks/useStorage";
import { TextField } from "@material-ui/core";

import EditProductForm from "../components/EditProductForm";

function UploadForm() {
  const [session, loading] = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const [progress, setProgress] = useState(0);

  const priceInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const categoryInputRef = useRef(null);

  const changeHandler = (e) => {
    //allowed  type of files
    const types = ["image/jpeg", "image/png"];

    console.log("change");
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Pls select an image files of type: (png or jpeg)");
    }
  };

  const handlerSumit = (e) => {
    e.preventDefault();

    const uploadTask = Storage.ref(`/images/${file.name}`).put(file);
    const collectionRef = db.collection("Products");

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload progress
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
        console.log(percentage + "% Done");
      },
      console.error,
      () => {
        //when upload is complete
        Storage.ref(`/images/${file.name}`)
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setImageUrl(url);
            console.log("uploaded url:", url);
            const createdAt = timestamp();
            collectionRef.add({
              url,
              createdAt,
              price: priceInputRef.current.value,
              status: true,
              description: descriptionInputRef.current.value,
              category: categoryInputRef.current.value,
            });

            setImageUrl(null);
            descriptionInputRef.current.value = "";
            priceInputRef.current.value = "";
            categoryInputRef.current.value = "";
          });
      }
    );
  };

  console.log(descriptionInputRef);

  return (
    <div>
      <div className=" flex flex-col items-center p-4 py-4 ">
        <button
          onClick={(ent) => router.push("/customerOrders")}
          className="bg-cyan-500 p-2 rounded-md focus:outline-none focus:ring-2 hover:bg-cyan-300"
        >
          Manage Order's{" "}
        </button>
      </div>

      <form className="flex flex-col space-y-4 items-center text-white">
        {/* <div className="p-4 py-4 bg-cyan-500"><button onClick={(ent)=>router.push('/customerOrders')} className="">Manage </button></div> */}
        <input
          className="font-bold text-gray-800  rounded-full bg-white outline-none shadow-lg "
          type="file"
          onChange={changeHandler}
        />
        <div>
          {error && <div>{error}</div>}
          {file && <div>{file.name}</div>}
          {file && (
            <ProgressBar
              imageUrl={imageUrl}
              setFile={setFile}
              progress={progress}
            />
          )}

          <img
            src={imageUrl}
            //width={100}
            //height={100}
          />
        </div>

        {/*  */}

        <div>
          <label for="" className="text-sm ">
            Product Description
          </label>
          <input
            required
            ref={descriptionInputRef}
            type="text"
            placeholder="Description"
            className="text-white font-bold bg-gray-800 ring-1 ring-gray-800 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        <div>
          <label for="" className="text-sm">
            Product Price
          </label>
          <input
            required
            ref={priceInputRef}
            type="number"
            placeholder="Price"
            className=" text-white font-bold bg-gray-800 ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        <div>
          <label for="" className="text-sm">
            Catergory
          </label>
          <input
            required
            ref={categoryInputRef}
            list="browsers"
            id="browser"
            placeholder="Category"
            className=" text-white font-bold bg-gray-800 ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          />
          <datalist id="browsers">
            <option value="Electrical" />
            <option value="Fashion" />
            <option value="Phones & Accessories" />
          </datalist>
        </div>

        {session.user.email == "fullupe@gmail.com" || "paakstiti@gmail.com" ? (
          <button
            disabled={!file || !priceInputRef || !descriptionInputRef || !categoryInputRef}
            className="inline-block  rounded-lg bg-cyan-800 text-white font-bold px-6 py-2 uppercase text-sm"
            onClick={handlerSumit}
          >
            send
          </button>
        ) : (
          <p className="animate-bounce">"YOU NEED ADMINISTRATIVE RIGHT"</p>
        )}
      </form>

      <div>
        {session.user.email == "fullupe@gmail.com" ? <EditProductForm /> : " "}
      </div>
    </div>
  );
}

export default UploadForm;
