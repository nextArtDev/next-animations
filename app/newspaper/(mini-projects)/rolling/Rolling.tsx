'use client'
import { FC, useRef } from 'react'
import './rolling.scss'
import { motion, useInView } from 'framer-motion'

interface RollingProps {}

const Rolling: FC<RollingProps> = ({}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="gallery">
      <motion.figure className="imageRoll" ref={ref}>
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
          Kitten: <strong>Ollie</strong> (12 Weeks)
        </figcaption>
      </motion.figure>
    </div>
  )
}

export default Rolling
