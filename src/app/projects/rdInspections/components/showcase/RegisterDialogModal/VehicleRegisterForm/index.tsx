import { useState } from 'react'
import VehiclePlateVerifier from './VehiclePlateVerifier'
import VehicleForm from './VehicleForm'

interface VehicleRegisterFormProps {
  setSubmitted: (state: boolean) => void
}

export default function VehicleRegisterForm({
  setSubmitted,
}: VehicleRegisterFormProps) {
  const [isVerified, setIsVerified] = useState(false)
  return (
    <div className="animate-showContent">
      <VehiclePlateVerifier
        isVerified={isVerified}
        setIsVerified={setIsVerified}
      />
      <VehicleForm isVerified={isVerified} setSubmitted={setSubmitted} />
    </div>
  )
}
