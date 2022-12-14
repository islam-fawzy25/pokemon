import React from "react";
interface Props {
    setDisplaySearch: (displaySearch: boolean) => boolean
    setSearchValue: (value: string) => string
    searchValue: string
}
export default function SearchBar({ setDisplaySearch, setSearchValue, searchValue }: Props) {
    return (
        <>
            <input type="text" placeholder="Search Teams"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value.toLowerCase())
                    setDisplaySearch(e.target.value.length === 0 ? false : true)
                }}
            />
        </>
    )
}