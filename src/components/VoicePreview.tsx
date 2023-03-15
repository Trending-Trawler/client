import {useContext} from "react";
import {SettingsContext} from "./SettingsContext";

export default function VoicePreview() {
    const { settings } = useContext(SettingsContext);

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Play
                </button>
            </div>
        </>
    )
}