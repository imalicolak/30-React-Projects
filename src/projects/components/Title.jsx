import React, { useState } from 'react';

export default function Title({ classes, text, color }) {
    return (
        <h1
            style={{ color }}
            className={!classes ? 'title' : classes && 'title'}
        >
            {' '}
            {!text ? 'Date' : text}{' '}
        </h1>
    );
}
