import { toast } from '@/components/ui/use-toast'
import axios from 'axios'

export function ErrorHandler(error: unknown) {
  console.error(error)
  const defaultErrorMessage = 'Ocorreu um erro. Tente novamente.'

  if (axios.isAxiosError(error)) {
    const errors = error.response?.data?.errors
    const arr = []

    for (const key in errors) {
      arr.push(errors[key])
    }
    toast({
      title: 'Ops!',
      description: arr[0] || defaultErrorMessage,
      variant: 'destructive',
    })
  } else {
    toast({
      title: 'Ops!',
      description: defaultErrorMessage,
      variant: 'destructive',
    })
  }
}
