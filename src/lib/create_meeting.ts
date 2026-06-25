import { calendar } from "./googleCalendar";

type Props = {
    startTime: string,
    endTime: string,
    patientEmail: string,
    doctorEmail: string,
    otherDocEmail: string,
}

export async function createGoogleMeet({ startTime, endTime, patientEmail, doctorEmail, otherDocEmail }: Props) {
    const event = await calendar.events.insert({
        calendarId: "primary",
        conferenceDataVersion: 1,
        requestBody: {
            summary: "Doctor Satyanarayana Garre Consultation",
            description: "Satyanarayana Garre Online consultation",
            start: {
                dateTime: startTime
            },
            end: {
                dateTime: endTime
            },
            attendees: [
                { email: patientEmail },
                { email: doctorEmail },
                { email: otherDocEmail }
            ],
            conferenceData: {
                createRequest: {
                    requestId: "meet-" + Date.now(),
                    conferenceSolutionKey: {
                        type: "hangoutsMeet"
                    }
                }
            },
            reminders: {
                useDefault: false,
                overrides: [
                    { method: "email", minutes: 60 },
                    { method: "popup", minutes: 10 }
                ]
            }
        }
    });

    const meetLink =
        event.data.conferenceData?.entryPoints?.[0]?.uri;

    return {
        meetLink,
        eventId: event.data.id
    };
}