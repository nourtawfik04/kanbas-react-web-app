import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }, { courseId }: { courseId: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const isEnrolled = enrollments.some(
    (enrollment: { user: any; course: any }) =>
      enrollment.user === currentUser?._id && enrollment.course === courseId
  );

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (currentUser.role === "STUDENT" && !isEnrolled) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
