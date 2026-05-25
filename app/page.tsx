import Sidebar from "@/components/dashboard/sidebar";
import HeroTile from "@/components/dashboard/hero-tile";
import ActivityTile from "@/components/dashboard/activity-tile";
import CourseCard from "@/components/dashboard/course-card";
import StatsTile from "@/components/dashboard/stats-tile";
import QuoteTile from "@/components/dashboard/quote-tile";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = createSupabaseServerClient();

  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="min-h-screen bg-black text-white flex overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 h-96 w-96 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      <Sidebar />

      <section className="flex-1 p-6 overflow-y-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">

          <div className="lg:col-span-7">
            <HeroTile />
          </div>

          <div className="lg:col-span-5 lg:row-span-2">
            <ActivityTile />
          </div>

          <div className="lg:col-span-4">
            <StatsTile />
          </div>

          <div className="lg:col-span-3">
            <QuoteTile />
          </div>

          {courses?.map((course, index) => (
            <div
              key={course.id}
              className={
                courses.length % 3 === 1 &&
                index === courses.length - 1
                  ? "lg:col-span-12"
                  : "lg:col-span-4"
              }
            >
              <CourseCard
                title={course.title}
                progress={course.progress}
                icon_name={course.icon_name}
              />
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}