'use client'
import { FC, useRef } from 'react'
import './rolling.scss'
import { motion, useInView } from 'framer-motion'

interface RollingProps {}

const Rolling: FC<RollingProps> = ({}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const imageUrls = [
    'https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg',
  ]
  return (
    <div className="flex w-full h-full items-center justify-center">
      <motion.figure
        className="imageRoll"
        ref={ref}
        style={{
          '--imageUrl': `url(${imageUrls[0] || ''})`,
        }}
      >
        <motion.i className={` ${isInView ? 'in-view' : ''}`}>
          <i>
            <i>
              <i>
                <i>
                  <i>
                    <i>
                      <i>
                        <i>
                          <i>
                            <i>
                              <i>
                                <i>
                                  <i>
                                    <i>
                                      <i>
                                        <i>
                                          <i>
                                            <i>
                                              <i>
                                                <i>
                                                  <i>
                                                    <i>
                                                      <i>
                                                        <i>
                                                          <i>
                                                            <i>
                                                              <i>
                                                                <i>
                                                                  <i>
                                                                    <i>
                                                                      <i>
                                                                        <i>
                                                                          <i>
                                                                            <i>
                                                                              <i>
                                                                                <i>
                                                                                  <i>
                                                                                    <i>
                                                                                      <i>
                                                                                        <i>
                                                                                          <i>
                                                                                            <i>
                                                                                              <i>
                                                                                                <i>
                                                                                                  <i>
                                                                                                    <i>
                                                                                                      <i>
                                                                                                        <i>
                                                                                                          <i>
                                                                                                            <i>
                                                                                                              <i>
                                                                                                                <i>
                                                                                                                  <i>
                                                                                                                    <i>
                                                                                                                      <i>
                                                                                                                        <i>
                                                                                                                          <i>
                                                                                                                            <i>
                                                                                                                              <i></i>
                                                                                                                            </i>
                                                                                                                          </i>
                                                                                                                        </i>
                                                                                                                      </i>
                                                                                                                    </i>
                                                                                                                  </i>
                                                                                                                </i>
                                                                                                              </i>
                                                                                                            </i>
                                                                                                          </i>
                                                                                                        </i>
                                                                                                      </i>
                                                                                                    </i>
                                                                                                  </i>
                                                                                                </i>
                                                                                              </i>
                                                                                            </i>
                                                                                          </i>
                                                                                        </i>
                                                                                      </i>
                                                                                    </i>
                                                                                  </i>
                                                                                </i>
                                                                              </i>
                                                                            </i>
                                                                          </i>
                                                                        </i>
                                                                      </i>
                                                                    </i>
                                                                  </i>
                                                                </i>
                                                              </i>
                                                            </i>
                                                          </i>
                                                        </i>
                                                      </i>
                                                    </i>
                                                  </i>
                                                </i>
                                              </i>
                                            </i>
                                          </i>
                                        </i>
                                      </i>
                                    </i>
                                  </i>
                                </i>
                              </i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </motion.i>

        <figcaption>
          {/* Kitten: <strong>Ollie</strong> (12 Weeks) */}
        </figcaption>
      </motion.figure>
    </div>
  )
}

export default Rolling
