'use client'

import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import supabase from '@/utils/supabase/supabase-client'

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text color="dimmed" sx={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size="1.1rem" stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <div>
        <label className='mb-[5px]'>Tooltip shown onFocus</label>
        <div className='h-2 w-2'></div>
        <TextInput
        id="email-input"
        rightSection={rightSection}
        placeholder="Your email"
        />
    </div>
  );
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length >= 6;
  return (
    <div>
        <label className='mb-[5px]'>Tooltip shown onFocus</label>
        <div className='h-2 w-2'></div>
        <div>
            <Tooltip
            label={valid ? 'All good!' : 'Password must include at least 6 characters'}
            position="bottom-start"
            withArrow
            opened={opened}
            color={valid ? 'teal' : undefined}
            >
            <PasswordInput
                id="password-input"
                required
                placeholder="Your password"
                onFocus={() => setOpened(true)}
                onBlur={() => setOpened(false)}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
            />
            </Tooltip>
        </div>
    </div>
  );
}

export default function InputTooltip() {
    async function signInWithEmail() {
        const email = (document.getElementById('email-input') as HTMLInputElement)?.value;
        const password = (document.getElementById('password-input') as HTMLInputElement)?.value;

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
    }

  return (
    <>
      <TooltipIcon />
      <TooltipFocus />
      <div className='w-full bg-white relative mt-9'>
            <button onClick={signInWithEmail} 
            className='
                bg-blue-400
                font-semibold
                py-[5px]
                px-[15px]
                rounded-md
                right-0
                flex
                absolute
            '
            >SUBMİT
            </button>
      </div>
    </>
  );
}