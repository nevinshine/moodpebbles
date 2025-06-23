import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import './Pond.css';

const Pond = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    const [pebbles, setPebbles] = useState([]);

    useImperativeHandle(ref, () => ({
        addPebble(pebble) {
            setPebbles((prev) => [...prev, pebble]);
        }
    }));

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.6;

        const animatePebbles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pebbles.forEach((pebble) => {
                ctx.globalAlpha = 1;
                ctx.fillStyle = '#ffcc80';
                ctx.beginPath();
                ctx.arc(Math.random() * canvas.width, canvas.height - Math.random() * 100, 20, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#000';
                ctx.fillText(pebble.text, Math.random() * canvas.width - 15, canvas.height - Math.random() * 100 + 5);
            });
            requestAnimationFrame(animatePebbles);
        };

        animatePebbles();
    }, [pebbles]);

    return <canvas ref={canvasRef} className="pond" />;
});

export default Pond;
