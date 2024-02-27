"use client";
import React, { useState } from "react";
/*
   1. High order function
   2. Anonymous function
   3. Fat arrow fucntion
   4. Callback function
 */

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };
  let renderTask = <h2>No Task Availables</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex justify-between mb-5 w-2/3">
            <h2 className="text-2xl font-semibold">{t.title}</h2>
            <h5 className="text2xl font-semibold">{t.desc}</h5>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-red-400 text-white p-5 text-5xl font-bold text-center"> My Todo Lis </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="enter the task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="enter  the description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">Add Task</button>
        {/* <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5" onClick={() => settitle("")}>
          CLear values
        </button> */}
      </form>
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
