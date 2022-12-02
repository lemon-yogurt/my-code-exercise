import React, { useState } from 'react';

const TypeScriptText = () => {
    const [state, setState] = useState<string>('配置ts成功');
    return (
        <div>
            {state}
        </div>
    )
}

export default TypeScriptText;