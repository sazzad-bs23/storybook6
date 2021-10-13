import React from "react";
import Button from "./Button";

export default {
    title: 'Molecules/Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

// export const Primary = () => <Button variant='primary'>Primary</Button>
// export const Secondary = () => <Button variant='secondary'>Secondary</Button>
// export const Success = () => <Button variant='success'>Success</Button>
// export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    // children: 'Primary Args'
}

// export const LongPrimary = Template.bind({})
// LongPrimary.args = {
//     ...Primary.args,
//     children: 'Long Primary'
// }

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    // children: 'Secondary Args'
}

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    // children: 'Secondary Args'
}