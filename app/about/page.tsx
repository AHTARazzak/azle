import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="lg:sticky lg:top-16">
          <Image
            src="/anna-about.jpg"
            alt="Anna Zoe Luna Eberle"
            width={600}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">BESCHREIBUNG</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anna bewegt sich in ihrer Arbeit gerne auf der fliessenden Grenze zwischen Mode und Kunst. Kleidungsstücke können einen Nutzen haben und zugleich eigenständige Körper sein und als Skulptur wahrgenommen werden. Insbesondere Kopfbedeckungen aller Art.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie beschäftigt sich mit dem Körper in Bezug zu seiner unmittelbaren Umgebung, spielt mit Erinnerung und Assoziation durch Zitieren von Formen, durch Andeutung und Mehrdeutigkeit.
            </p>
            <p className="text-gray-700 leading-relaxed">
              So schafft sie Kleid-Objekte, Assoziationsräume, durch Bewegung zum Leben erweckt – dreidimensionale Zeichnungen, die von den Betrachtenden, sowie den Träger*innen mit Gedankenbildern ausgemalt werden können.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Die Arbeiten werden mal performativ, mal installativ, filmisch oder fotografisch gezeigt.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">SKILLS</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">ANALOGUE</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  SKETCHING, DRAWING, AQUAREL, COLLAGES, ILLUSTRATIONS, TECHNICAL DRAWING, DRAPING, FLAT PATTERN DRAFTING (BASIC), STYLING, SCREEN PRINTING, MATERIAL EXPERIMENTS, PATTERNS, SCULPTING AND MOLD MAKING (CLAY AND PLASTER ETC.), WOOD CARVING, PLASTICS (BASIC), IMPROVISATION
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">DIGITAL</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR, ADOBE PREMIERE PRO (BASIC)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">TEXTILE</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  HAND SEWING, SEWING ON INDUSTRIAL MACHINES, LEATHERWORKING (BASIC), KNITTING BY HAND AND MACHINE (BASIC), CROCHET, SMOCKING
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">LANGUAGES</h3>
            <div className="space-y-2 text-gray-700">
              <p>SWISS-GERMAN (MOTHER TONGUE)</p>
              <p>GERMAN (MOTHER TONGUE)</p>
              <p>ENGLISH (FLUENT, CAD)</p>
              <p>FRENCH (GOOD UNDERSTANDING, BASIC SPEAKING)</p>
              <p>ITALIAN (BASIC)</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">EDUCATION</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-semibold">2016-2020</p>
                <p className="text-sm">UNIVERSITY OF APPLIED SCIENCES AND ARTS NORTHWESTERN SWITZERLAND FHNW, INSTITUTE OF FASHION DESIGN</p>
              </div>
              <div>
                <p className="font-semibold">NOV.2018-FEB.2019</p>
                <p className="text-sm">INTERNSHIP AT AGANOVICH, PARIS</p>
              </div>
              <div>
                <p className="font-semibold">2015-2016</p>
                <p className="text-sm">FOUNDATION COURSE IN ARTS AND DESIGN, LUCERNE UNIVERSITY OF APPLIED SCIENCES AND ARTS</p>
              </div>
              <div>
                <p className="font-semibold">2011-2012</p>
                <p className="text-sm">EXCHANGE YEAR IN NEW DELHI, INDIA</p>
              </div>
              <div>
                <p className="font-semibold">2007-2014</p>
                <p className="text-sm">HIGHSCHOOL WITH MATURA (A-LEVELS), SWITZERLAND</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}