import React, { ChangeEvent, useState } from 'react';

export default function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const inputObject = {
        value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            if (
                !e.target.value.includes('#') &&
                !e.target.value.includes('%') &&
                !e.target.value.includes('$')
            ) {
                setValue(e.target.value);
            }
        },
    };

    return [value, inputObject];
}
