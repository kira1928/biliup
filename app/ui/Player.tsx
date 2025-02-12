import React, {useEffect} from "react";
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import FlvPlugin from "xgplayer-flv";
import FlvJsPlugin from 'xgplayer-flv.js'

const Players: React.FC<{url: string}> = ({url}) => {
    useEffect(() => {
        let player: Player | null = new Player({
            id: 'mse',
            url: url,
            height: '100%',
            plugins: [FlvPlugin],
            // plugins: [FlvJsPlugin],
            width: '100%',
        });
        return () => {
            player?.destroy();
            player = null;
        };
    }, [])
    return  <div id="mse"></div>;
}

export default Players;