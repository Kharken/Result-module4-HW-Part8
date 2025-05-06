import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { routerConfig } from '@app/router/routeConfig';

import { useAuth } from '@auth/model/hooks/useAuth';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

export const LoginForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 3 ? null : 'Password must be more than 3 characters',
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    if (!auth) return;

    setIsLoading(true);
    try {
      auth.signIn(values, () => {
        navigate(routerConfig.index);
      });
    } catch (error) {
      notifications.show({
        title: 'Ошибка входа',
        message: 'Неверный email или пароль',
        color: 'red',
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      onReset={form.onReset}
    >
      <Stack
        align="stretch"
        gap="md"
        mt="md"
      >
        <TextInput
          label="Email"
          placeholder="Email"
          type="email"
          required
          radius="md"
          {...form.getInputProps('email')}
        />

        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          required
          radius="md"
          {...form.getInputProps('password')}
        />

        <Group justify="space-between">
          <Button
            variant="filled"
            color="blue.6"
            radius="md"
            type="submit"
            loading={isLoading}
            disabled={isLoading}
          >
            Submit
          </Button>
          <Button
            variant="outline"
            color="grape.6"
            radius="md"
            type="reset"
            disabled={isLoading}
          >
            Reset
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
