import React from 'react';
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../common/c7-SuperRange/SuperRange";
import {SuperDoubleRange} from "../common/c8-SuperDoubleRange/SuperDoubleRange";

export const Test = () => {
    return (
        <div>
            <div>
                1. SuperInputText - <SuperInputText/>
            </div>
            <div>
                2. SuperButton - <SuperButton/>
            </div>
            <div>
                3. SuperCheckbox - <SuperCheckbox/>
            </div>
            <div>
                4. SuperEditableSpan - <SuperEditableSpan/>
            </div>
            <div>
                5. SuperSelect - <SuperSelect/>
            </div>
            <div>
                6. SuperRadio - <SuperRadio/>
            </div>
            <div>
                7. SuperRange - <SuperRange/>
            </div>
            <div>
                8. SuperDoubleRange - <SuperDoubleRange/>
            </div>
        </div>
    );
};

