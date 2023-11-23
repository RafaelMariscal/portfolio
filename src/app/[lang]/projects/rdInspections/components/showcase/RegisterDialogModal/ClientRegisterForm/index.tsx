import { useState } from 'react'
import CnpjVerifierForm from './CnpjVerifierForm'
import ClientForm from './ClientForm'

interface ClientRegisterFormProps {
  setSubmitted: (state: boolean) => void
}

export default function ClientRegisterForm({
  setSubmitted,
}: ClientRegisterFormProps) {
  const [isCnpjVerified, setIsCnpjVerified] = useState(false)
  return (
    <div className="animate-showContent">
      <CnpjVerifierForm
        isVerified={isCnpjVerified}
        setIsVerified={setIsCnpjVerified}
      />
      <ClientForm isVerified={isCnpjVerified} setSubmitted={setSubmitted} />
    </div>
  )
}
