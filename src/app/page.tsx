"use client";
import Print from "@/components/Print";
import styles from "./page.module.scss";
import index from '@/json/index.json';
import { FormEvent, KeyboardEvent, useEffect, useState } from "react";

export default function Home() {

    return (
        <main className={styles.main}>
            <div>Everything is under construction</div>
            <div>密鑼緊鼓施工中</div>
            <Form></Form>
        </main>
    );
}

function Form() {
    Print(`Generate Form`);
    const previewNumber = 5;
    let previewLoaded = false;
    let preview = null;
    const [resultList, setResultList] = useState(Array<string>())
    const [isFocused, setFocused] = useState(false);
    const [inputText, setInputText] = useState(``);
    const [predicate, setPredicate] = useState(``);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isSelecting, setSelecting] = useState(false);
    


    const handleOnFocus = () => {
        Print(`Focus`);
        setFocused(true);
    };
    const handleOnBlur = () => {
        Print(`Blur`);
        setFocused(false);
        
    };

    const handleOnChange = (v: string) => {
        Print(`onChange`);
        setInputText(v);
        //If change is caused by arrow key selectioin 
        //no change to the predicate which triggers search
        if (!isSelecting) {
            setPredicate(v)
        }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        Print(`handleKeyDown`);
        if (e.key == "ArrowDown") {
            e.preventDefault();

            const maxIndex = resultList.length - 1;
            if (maxIndex > -1) {

                if (selectedIndex < maxIndex) {
                    setSelectedIndex(selectedIndex + 1);
                } else {
                    setSelectedIndex(0);
                }
            }

        } else if (e.key == "ArrowUp") {
            e.preventDefault();
            const maxIndex = resultList.length - 1;
            if (maxIndex > -1) {


                Print(`Selecting:${isSelecting}`);
                if (selectedIndex > 0) {
                    setSelectedIndex(selectedIndex - 1);

                } else {
                    setSelectedIndex(maxIndex);
                }

            }
        }else {
            setSelecting(false);
        }

    }
    const handleOnSubmit = (e: FormEvent) => {

        e.preventDefault();

    };

    // Search 
    useEffect(() => {

        if (predicate) {
            Print(`Search`);

            const keys = Object.keys(index);
            let subStrings = predicate.trim().split(` `);


            //remove empty string elements in the array
            for (let index = 0; index < subStrings.length; index++) {
                const string = subStrings[index];
                if (string.length == 0) {
                    subStrings.splice(index, 1);
                    index--;
                }
            }
            //remove duplicated string elements in the array
            Print(`predicate before: ${subStrings}`);
            subStrings = subStrings.filter((v,i)=> subStrings.indexOf(v) === i);
            Print(`predicate after: ${subStrings}`);

            // Search
            let list = keys;
            subStrings.forEach((s)=>{
                list = list.filter(key=> key.includes(s))
                Print(`list: ${list} with ${s}`)
                
            });
            if(list.length > previewNumber){
                list = list.slice(0,previewNumber);
            }
            
            Print(`Set List`)
            setResultList(list);
        } else {
            setResultList([]);
        }

    }, [predicate])


    //Set input text if selected
    useEffect(() => {
        Print(`selected index changed`)
        if (selectedIndex > -1) {
            setSelecting(true);
        } else {
            setSelecting(false);
        }

    }, [selectedIndex])

    Print(`text is going to be ${selectedIndex} : ${resultList[selectedIndex]}`);
    useEffect(() => {
        if (selectedIndex > -1 && resultList.length > 0 && isSelecting) {

            setInputText(resultList[selectedIndex]);

        }

    }, [selectedIndex,isSelecting]);





    // Generate list
    if (resultList.length > 0 && isFocused) {
        Print(`Generate list`);
        previewLoaded = true;

        preview = (
            <ul>
                {
                    resultList.map((key, index) => {
                        const selected = index == selectedIndex ? `true` : `false`;
                        return (

                            <li key={key} data-arrow-selected={selected}>{key}</li>
                        )
                    })
                }
            </ul>
        )
    }



    return (
        <form action=""
            method="get"
            className={styles.form}
            autoComplete="off"
            onSubmit={(e) => { handleOnSubmit(e) }}
        >
            <div className={styles.bar}>
                <label htmlFor="search">

                    <input type="text"
                        name="search"
                        id="search"
                        placeholder="Search here"
                        value={inputText}
                        onChange={(e) => {

                            handleOnChange(e.target.value);
                        }}
                        onFocus={(e) => { handleOnFocus() }}
                        onBlur={(e) => { handleOnBlur() }}
                        onKeyDown={(e) => { handleKeyDown(e) }}
                        data-preview-loaded={previewLoaded}
                    />
                    <svg viewBox="0 0 56.7 56.7">
                        <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
                    </svg>
                </label>
                <input type="submit" value="GO" data-preview-loaded={previewLoaded} />
            </div>
            <div className={styles.preload}>
                {preview}
            </div>

        </form>
    )
}