import { useMemo, useState } from "react"
import messagesData from "@/data/messages.json"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type MessageItem = {
  id: number
  name: string
  message?: string
  audio?: string
}

function previewText(text: string, maxChars = 160) {
  const clean = (text ?? "").replace(/\s+/g, " ").trim()
  if (!clean) return ""
  if (clean.length <= maxChars) return clean
  return clean.slice(0, maxChars).trimEnd() + "…"
}

export function MessagesList() {
  const messages = useMemo(() => messagesData as MessageItem[], [])
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<MessageItem | null>(null)

  const openCard = (m: MessageItem) => {
    setSelected(m)
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
    setTimeout(() => setSelected(null), 150)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold gradient-text text-center mb-12">
          Buenos deseos
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {messages.map((m, idx) => {
            const hasText = !!(m.message && m.message.trim().length > 0)
            const hasAudio = !!m.audio

            return (
              <div
                key={m.id}
                className="birthday-card scale-in p-6 flex flex-col"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <p className={`font-semibold text-lg leading-tight mb-3 ${hasText ? "" : "text-center"}`}>
                  {m.name}
                </p>

                {/* Preview solo si hay texto */}
                {hasText ? (
                  <p className="text-sm md:text-base opacity-90 leading-relaxed flex-1">
                    {previewText(m.message ?? "")}
                  </p>
                ) : (
                  <p className="text-sm md:text-base opacity-80 leading-relaxed flex-1 text-center">
                    {hasAudio ? "Dejó un audio." : "No dejó mensaje."}
                  </p>
                )}

                {/* Botón único: centrado si no hay texto */}
                <div className={`mt-4 ${hasText ? "" : "flex justify-center"}`}>
                  <Button
                    className={hasText ? "w-full" : "w-full max-w-[260px]"}
                    onClick={() => openCard(m)}
                  >
                    Ver mensaje completo
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* MODAL */}
        <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : close())}>
          <DialogContent className="birthday-card max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-dancing gradient-text">
                {selected?.name ?? "Mensaje"}
              </DialogTitle>

              <DialogDescription asChild>
                <div className="mt-2">
                  {/* AUDIO (si existe) */}
                  {selected?.audio && (
                    <div className="mb-5">
                      <div className="rounded-2xl border border-white/15 bg-white/5 p-3">
                        <audio
                          controls
                          preload="metadata"
                          className="w-full"
                          src={selected.audio}
                        />
                      </div>
                    </div>
                  )}

                  {/* TEXTO COMPLETO (si existe) */}
                  {selected?.message && selected.message.trim().length > 0 ? (
                    <div className="max-h-[55vh] overflow-auto pr-2">
                      <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                        {selected.message}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm md:text-base opacity-80">
                      No dejó mensaje escrito.
                    </p>
                  )}

                  <div className="mt-6">
                    <Button className="w-full" onClick={close}>
                      Cerrar
                    </Button>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
