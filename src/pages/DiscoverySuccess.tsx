export default function DiscoverySuccess() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-3xl font-bold tracking-tighter mb-4">Discovery Submitted</h1>
      <p className="text-[#6E6A5E] mb-8">
        Thank you. I'll review your workflow within 24–48 hours.<br />
        You should receive an email confirmation shortly.
      </p>
      <a href="/" className="text-[#2A5D9E] hover:underline font-medium">
        ← Return Home
      </a>
    </div>
  );
}